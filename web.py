import gi
gi.require_version('Gtk','3.0')
from gi.repository import Gtk,WebKit

HISTORY_FILE = "/home/nicerova7/browser_history.html"
HOME_PAGE = "https://gnome.org"

def open_page(url):
    entry.set_text(url)
    webview.load_uri(url)

def open_history(button):
    open_page("file://" + HISTORY_FILE)

def on_load_changed(webview, event):
    url = webview.get_uri ()
    history_file = open(HISTORY_FILE, "a+")
    history_file.writelines("* <a href=\"" + url + "\">" + url + "</a><br>")
    history_file.close()

def on_enter(entry):
    url = entry.get_text()
    webview.open(url)
    if(url == "about:history"):
        open_history(webview)
        return
    open_page(url)

def on_go_back(button):
    webview.go_back()

def on_go_forward(button):
    webview.go_forward()
    
win = Gtk.Window()
webview = WebKit.WebView()
win.set_default_size(400,300)
webview.open("https://www.gnome.org/")
scrolled_window = Gtk.ScrolledWindow()

history_button = Gtk.Button()
history_button_image = Gtk.Image.new_from_icon_name("open-menu-symbolic", Gtk.IconSize.SMALL_TOOLBAR)
history_button.add(history_button_image)
history_button.connect("clicked", open_history)


headerbar = Gtk.HeaderBar()
headerbar.set_show_close_button(True)
win.set_titlebar(headerbar)


go_back_button = Gtk.Button()
go_back_arrow = Gtk.Image.new_from_icon_name("go-previous", Gtk.IconSize.SMALL_TOOLBAR)
go_back_button.add(go_back_arrow)
go_back_button.connect("clicked", on_go_back)

go_forward_button = Gtk.Button()
go_forward_arrow = Gtk.Image.new_from_icon_name("go-next", Gtk.IconSize.SMALL_TOOLBAR)
go_forward_button.add(go_forward_arrow)
go_forward_button.connect("clicked", on_go_forward)

headerbar.pack_start(go_back_button)
headerbar.pack_start(go_forward_button)
headerbar.pack_end(history_button)

entry = Gtk.Entry()
entry.connect("activate", on_enter)
headerbar.set_custom_title(entry)

win.set_title("Web Browser")
win.connect("delete-event",Gtk.main_quit)

win.add(webview)
scrolled_window.add(webview)
win.add(scrolled_window)
win.show_all()

Gtk.main()
