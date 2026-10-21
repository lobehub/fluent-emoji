<div align="center"><a name="readme-top"></a>

![](https://github.com/user-attachments/assets/0a68d799-d7b4-44af-89c1-00ae8bbf3a1c)

<h1>Fluent Emoji</h1>

<h3>Expressive Emoji for React, Loaded on Demand</h3>

A React component and helpers that render Microsoft Fluent Emoji in five styles (animated, 3D, modern, flat and mono), with images loaded from a CDN.<br/>
For React developers who want the same emoji on every platform without bundling image assets; browse them all at [fluent-emoji.lobehub.com](https://fluent-emoji.lobehub.com).

[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

</div>

<br/>

## 💡 Why Fluent Emoji?

Drop Microsoft's [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) into any React app with a single component.

- **Five looks, one prop**: switch between animated, 3D, modern, flat and monochrome emoji
- **Keeps your bundle small**: images are fetched from a CDN only when they are shown
- **Never shows a broken image**: falls back to the native emoji if an image can't load
- **Works with React 19 and Next.js**: including custom image components such as `next/image`
- **Handy emoji helpers**: find the emoji in a string, get its name, or get an image URL
- **AI-native**: agent-ready [`skills.md`][skills-link] and [`llms.txt`][llms-link] so AI assistants use it correctly

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🚀 Getting Started

```bash
$ bun add @lobehub/fluent-emoji
```

Requires `react` and `react-dom` 19 (peer dependencies). The package is ESM only.

```tsx
import { FluentEmoji } from '@lobehub/fluent-emoji';

export default () => <FluentEmoji emoji={'🤯'} size={64} type={'anim'} />;
```

Need just the image URL? `getFluentEmojiCDN('🤯', { type: '3d' })` returns it.

Using Next.js? Add `transpilePackages: ['@lobehub/fluent-emoji']` to `next.config.js`.

See the [documentation](https://fluent-emoji.lobehub.com) for all props, styles and helpers ([FluentEmoji](https://fluent-emoji.lobehub.com/components/fluent-emoji) · [getFluentEmojiCDN](https://fluent-emoji.lobehub.com/components/get-fluent-emoji-cdn) · [getEmojiByCharacter](https://fluent-emoji.lobehub.com/components/get-emoji-by-character)).

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤖 AI-Powered Development

Fluent Emoji is ready for AI-assisted development. The docs site generates agent-friendly references for every component and helper.

| Tool             | What it does                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------- |
| **Agent Skills** | [skills.md][skills-link]: give this URL to your agent in Cursor, Claude Code, Codex, etc. |
| **llms.txt**     | [llms.txt][llms-link]: an index of every docs page, so LLMs can find the right reference  |

Copy this prompt into your agent:

```text
Read https://fluent-emoji.lobehub.com/skills.md and use @lobehub/fluent-emoji to render emoji in my React app.
```

Works with **Cursor**, **Claude Code**, **Windsurf**, **GitHub Copilot**, and any other tool that supports `llms.txt`.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🧩 Packages

| Package                                                                        | Purpose                                                    |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`@lobehub/fluent-emoji`](https://www.npmjs.com/package/@lobehub/fluent-emoji) | The React component and helpers (the only one you install) |
| `@lobehub/fluent-emoji-{3d,anim-1…4,modern,flat,mono}`                         | Emoji image assets, served from a CDN automatically        |

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

[![][bun-shield]][bun-link]

```bash
$ git clone https://github.com/lobehub/fluent-emoji.git
$ cd fluent-emoji
$ bun install
$ bun dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

- **[🍭 Lobe UI](https://github.com/lobehub/lobe-ui)** - React component library for AI applications
- **[🥨 Lobe Icons](https://github.com/lobehub/lobe-icons)** - AI / LLM brand logo and icon collection
- **[📊 Lobe Charts](https://github.com/lobehub/lobe-charts)** - React chart components library
- **[✒️ Lobe Editor](https://github.com/lobehub/lobe-editor)** - Lexical-based rich text editor for React, with Markdown, plugins and a chat composer
- **[🎤 Lobe TTS](https://github.com/lobehub/lobe-tts)** - TTS / STT speech library
- **[📐 Lobe Lint](https://github.com/lobehub/lobe-lint)** - ESLint, Prettier, Stylelint, Commitlint and more lint configs
- **[😀 Fluent Emoji](https://github.com/lobehub/fluent-emoji)** - Fluent Emoji asset library

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2024 [LobeHub][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[github-action-release-link]: https://github.com/lobehub/fluent-emoji/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/fluent-emoji/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/fluent-emoji/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/fluent-emoji/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/lobehub/fluent-emoji
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/lobehub/fluent-emoji/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Ffluent-emoji
[github-contributors-link]: https://github.com/lobehub/fluent-emoji/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/fluent-emoji?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/fluent-emoji/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/fluent-emoji?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/fluent-emoji/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/fluent-emoji?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/fluent-emoji/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/fluent-emoji?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/fluent-emoji/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/fluent-emoji?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/fluent-emoji/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/fluent-emoji?color=ffcb47&labelColor=black&style=flat-square
[llms-link]: https://fluent-emoji.lobehub.com/llms.txt
[npm-release-link]: https://www.npmjs.com/package/@lobehub/fluent-emoji
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/fluent-emoji?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/fluent-emoji/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/lobehub
[skills-link]: https://fluent-emoji.lobehub.com/skills.md
