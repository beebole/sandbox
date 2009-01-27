from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

class MainPage(webapp.RequestHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/html'
    self.response.out.write('''<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>SandBoxed - JSONP</title><script type="text/javascript" src="js/json2Min.js"></script><script type="text/javascript">function callBack(json){window.name = JSON.stringify(json);}</script><script src="'''+self.request.get("JSONP")+'''" charset="UTF-8" type="text/javascript"></script></head><body><a href="http://beebole.com/blog/general/sandbox-your-cross-domain-jsonp-to-improve-mashup-security/">Get information</a></body></html>''')


application = webapp.WSGIApplication([('/', MainPage)],debug=True)

def main():
  run_wsgi_app(application)

if __name__ == "__main__":
  main()
