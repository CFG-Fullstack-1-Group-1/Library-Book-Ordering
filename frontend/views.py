from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse


# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
    
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "frontend/login.html", {
                    "message": "Incorrect username or password."
                })
    else:
        return render(request, "frontend/login.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))
