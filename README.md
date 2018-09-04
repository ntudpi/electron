![Electron](https://camo.githubusercontent.com/627c774e3070482b180c3abd858ef2145d46303b/68747470733a2f2f656c656374726f6e6a732e6f72672f696d616765732f656c656374726f6e2d6c6f676f2e737667)

# Introduction

[Electron](https://electronjs.org/) is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. Electron accomplishes this by combining [Chromium](https://www.chromium.org/Home) and [Node.js](https://nodejs.org/) into a single runtime and apps can be packaged for Mac, Windows, and Linux.

To check out the process architecture, see the article for [Main and Renderer Processes](https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes).

# Installation

First, install [Node.js](https://nodejs.org/) in order to use npm. Then, you can follow the official [tutorial](https://electronjs.org/docs/tutorial/first-app) on making a simple website.

# Pros and Cons

As mentioned in the introduction, Electron relies entirely on web standards that almost every web developer already knows, allowing them to write desktop software.

Electron allows developers to focus on the core functionality of the applications by already taking care of the hard parts in software development, e.g. rendering, release builds, etc.

Electron uses Chromium engine for UI rendering. This means that we can get various core functionalities like auto-update, crash reporter, installer creator and system-specific features.

But, because Electron uses Chromium engine, this means that every Electron app carries its own copy of a Chromium browser. This makes a simple app like a “Hello World” app on Electron to be around 100MB in storage space. This is probably the most prominent weakness of Electron.

Another issue with Electron is that eventhough the applications are indeed cross-platform, builds to other OSes relies heavily on the dependencies. For example, a Windows build on macOS relies heavily on the `wine` program inside the macOS, i.e. `wine` must be updated to its latest version. The best way to build Windows apps is to build on a Windows OS.

No built-in MVC is provided by Electron, and it’s also not as feature-rich or mature as other desktop app frameworks such as NW.js.

# Concerns and Expectations

Electron is capable of building desktop applications using HTML, CSS, Javascript. That is, only static web pages may be used in Electron. Future developers may explore how Electron could be integrated with dynamic web pages, as well as popular front-end web frameworks such as React, Angular.js, etc.

As per 4 Sept 2018, there is an experimental alternative of Electron, [Electrino](https://github.com/pojala/electrino) that can shrink the size of Electron apps to roughly 0.1% of its original size. Perhaps some time in the future this may be useful.

# Summary

Personally, I think Electron is great for beginners to explore desktop application development. But due to its heavyweight application sizes, it's better to use other frameworks such as Haxe and NW.js for more complicated and advanced desktop applications.
