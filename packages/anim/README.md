<div align="center"><a name="readme-top"></a>

<img height="120" src="https://raw.githubusercontent.com/lobehub/lobe-assets/master/packages/assets-logo/assets/logo-3d.webp">

<h1>@lobehub/fluent-emoji-anim</h1>

Private source folder for the animated (`anim`) Fluent Emoji assets. **Not published to npm.**

[Fluent Emoji][repo-link] · [Docs][docs-link]

</div>

`packages/anim/assets` holds the full animated WebP set. `bun run build:static` (`scripts/groupAnim.ts`) splits it by code point into the published packages `@lobehub/fluent-emoji-anim-1` … `-anim-4` (`packages/anim1` – `packages/anim4`), which `FluentEmoji` loads from a CDN when `type='anim'`.

The split must stay in sync with `emojiAnimPkg` in [`src/getFluentEmojiCDN/utils.ts`](../../src/getFluentEmojiCDN/utils.ts).

---

#### 📝 License

Copyright © 2026 [LobeHub][profile-link]. <br />
This project is [MIT][license-link] licensed.

[docs-link]: https://fluent-emoji.lobehub.com
[license-link]: https://github.com/lobehub/fluent-emoji/blob/master/LICENSE
[profile-link]: https://github.com/lobehub
[repo-link]: https://github.com/lobehub/fluent-emoji
