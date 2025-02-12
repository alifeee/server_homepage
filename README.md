# Server homepage

This is the homepage for my server, hosted with [Kamatera](https://www.kamatera.com/).

Visit the live page at <http://server.alifeee.net>.

![Screenshot of homepage, showing green terminal and list of projects.](images/homepage.png)

It lives in `/var/www/server_homepage`. To update it, `ssh` to the server, `cd` to there, and run `git pull`.

Add projects to `projects.yaml`, and then use `mustache` to generate `projects.html`, i.e.,

```bash
# sudo apt-get install ruby-mustache
./build.sh
```
