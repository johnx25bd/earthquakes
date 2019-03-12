# {blue}shift interview : Lesson Plan

An introductory raspberry pi exercise: scraping and visualizing earthquake data.

### Learning Objectives

This lesson will introduce beginner coders to several computing concepts such as:
- the command line
- git and github
- Data and APIs
- clients and servers
- relative and absolute paths, plus URLs

### Key Skills

By the end of the lesson students will be able to:
- navigate through their directory structure on the command line
- clone a github repository and examine its contents
- open a file in a text editor
- interpret a path, including identifying relative and absolute paths
- interpret the anatomy of a URL
- read and configure a python script to write data fetched from an API to a location in their directory
- start a local web server to load a local HTML document, visualizing scraped data

### Prior Knowledge

It is assumed that students have knowledge in:
- text editors
- finders / file explorer graphical interfaces
- web browsers

### Resources

It is also assumed that students are using internet-connected raspberry pis installed with terminal, python, git, a text editor and a web browser.

### Lesson Schedule

The lesson will consist of a 20 minute framing talk for all students, following by a series of remarks introducing practical coding concepts and subsequent 5-10 minute hands-on workshops in which students explore and experiment with key concepts.

The instructor and support staff, along with any advanced students, will be available to support students during their workshop sessions.

| Time | Activity |
| --- | --- |
| 0 | Introduction, data, processors |
| 5 | Hard drives, local and relative paths, URLs |
| 15 | Clients, servers and web APIs |
| 20 | Github and `git clone` [workshop 1] |
| 30 | Python, requests and `get_earthquakes.py` [workshop 2] |
| 45 | Web servers with `python -m http.server` [workshop 3] |
| 55 | Conclusions |

### Repository

`get_earthquakes.py`
- Examining request URL
- Printing fetched data
- Writing fetched data to file

`visualize_earthquakes.html+`
- Relative path to get_earthquakes.py JSON output
- Viewing site in browser on local web server (`python -m http.server`)

### Key Scripts and Commands

`git clone git@github.com:robisoniv/earthquakes.git`

`earthquakes/scrape/get_earthquakes.py`

`earthquakes/visualize/*`
