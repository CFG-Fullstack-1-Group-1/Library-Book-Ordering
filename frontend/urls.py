from django.urls import path, re_path
from .views import index, login_view, logout_view, mismatched_path

urlpatterns = [
    path('', index, name="index"),
    path('login/', login_view, name="login"),
    path('logout/', logout_view, name="logout"),
    path('search/', index, name="search"),
    path('order/', index, name="order"),
    path('about-us/', index, name="about-us"),
    path('contact-us/', index, name="contact-us"),
    # Catch-all for erroneous paths redirecting from root path to index view:
    re_path(r'^$', mismatched_path, name ="not_found"),
    # Catch-all for erroneous paths redirecting from root subpaths to index view:
    re_path(r'^(?:.*)/?$', mismatched_path, name="not_found"), 
]