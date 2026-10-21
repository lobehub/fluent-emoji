<div align="center"><a name="readme-top"></a>

<img height="120" src="https://raw.githubusercontent.com/lobehub/lobe-assets/master/packages/assets-logo/assets/logo-3d.webp">

<h1>@lobehub/fluent-emoji-3d</h1>

3D style assets (WebP) for [`@lobehub/fluent-emoji`][npm-main-link].

[![][npm-release-shield]][npm-release-link]

[Fluent Emoji][repo-link] · [Docs][docs-link] · [Changelog](./CHANGELOG.md)

</div>

This package only contains emoji image files, used when `type='3d'` is set on `FluentEmoji`. They are loaded from a CDN at runtime, so you usually **don't need to install it**: install `@lobehub/fluent-emoji` instead.

```tsx
import { FluentEmoji } from '@lobehub/fluent-emoji';

export default () => <FluentEmoji emoji={'😀'} type={'3d'} />;
```

Files are named by the emoji's code points (lowercase hex joined by `-`), for example:

```bash
https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets/1f600.webp
https://unpkg.com/@lobehub/fluent-emoji-3d@latest/assets/1f600.webp
```

---

#### 📝 License

Copyright © 2026 [LobeHub][profile-link]. <br />
This project is [MIT][license-link] licensed.

[docs-link]: https://fluent-emoji.lobehub.com
[license-link]: https://github.com/lobehub/fluent-emoji/blob/master/LICENSE
[npm-main-link]: https://www.npmjs.com/package/@lobehub/fluent-emoji
[npm-release-link]: https://www.npmjs.com/package/@lobehub/fluent-emoji-3d
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/fluent-emoji-3d?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[profile-link]: https://github.com/lobehub
[repo-link]: https://github.com/lobehub/fluent-emoji
