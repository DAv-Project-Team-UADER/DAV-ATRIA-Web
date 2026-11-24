import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit


ROOT = Path(__file__).resolve().parent
with (ROOT / "vercel.json").open(encoding="utf-8") as config_file:
    ROUTES = json.load(config_file)

REDIRECTS = {rule["source"]: rule["destination"] for rule in ROUTES["redirects"]}
REWRITES = {rule["source"]: rule["destination"] for rule in ROUTES["rewrites"]}


class RoutedHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        self._serve()

    def do_HEAD(self):
        self._serve(head_only=True)

    def _serve(self, head_only=False):
        request = urlsplit(self.path)

        destination = REDIRECTS.get(request.path)
        if destination:
            self.send_response(308)
            self.send_header(
                "Location", urlunsplit(("", "", destination, request.query, ""))
            )
            self.end_headers()
            return

        destination = REWRITES.get(request.path)
        if destination:
            self.path = urlunsplit(("", "", destination, request.query, ""))

        if head_only:
            super().do_HEAD()
        else:
            super().do_GET()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 8001), RoutedHandler)
    print("Local preview: http://127.0.0.1:8001", flush=True)
    server.serve_forever()
