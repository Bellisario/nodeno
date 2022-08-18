<!-- cspell:word nodeno -->

# Nodeno ![Deno](https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white)

> Production URL here: https://nodeno.deno.dev/

Feel free to contribute and new features. :octocat:

## What is Nodeno? :question:

Nodeno is a simple Node.js latest version API that detects the latest version of Node.js and returns it.

## Why? :thinking:

I was thinking about Deno Deploy and some domain jokes when I "realized", since Deno is the anagram of Node, I could use the domain name as "Node" instead of "Deno", and came back with:

```
nodeno.deno.dev
--- to ---
NodeNo.deNo.dev
--- which means ---
Node Node Node... Version!!!
```

So, after this name "prank", I decided to build it for real.

## Main problem :bug:

Node.js uses GitHub releases, but using the latest version will retrieve the latest RELEASED version of Node.js, not the latest version you can actually download, since also old versions receive patches...

### How I solved it :sunglasses:

To solve this problem, I just compared all the versions, splitting them into major, minor and patch, then compared major first, then all minor with the same major, then all patch with the same major and minor.

And that's it! :wink:

## Contributing :pencil2:

We :heart: contributions!\
Feel free to open an [issue](https://github.com/Bellisario/nodeno/issues) or a [pull request](https://github.com/Bellisario/nodeno/pulls) but follow [Contributing Guidelines](https://github.com/Bellisario/nodeno/blob/main/CONTRIBUTING.md).

> **Tip:** if you don't know where to start, check out the [help wanted issues](https://github.com/Bellisario/nodeno/labels/help%20wanted)!

## License

MIT License [here](https://github.com/Bellisario/nodeno/blob/main/LICENSE).
