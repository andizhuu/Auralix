# @auralix/music

Native MediaStore music scanner and player plugin for Auralix.

## Install

To use npm

```bash
npm install @auralix/music
````

To use yarn

```bash
yarn add @auralix/music
```

Sync native files

```bash
npx cap sync
```

## API

<docgen-index>

* [`getSongs()`](#getsongs)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSongs()

```typescript
getSongs() => Promise<{ songs: Song[]; }>
```

**Returns:** <code>Promise&lt;{ songs: Song[]; }&gt;</code>

--------------------


### Interfaces


#### Song

| Prop           | Type                |
| -------------- | ------------------- |
| **`title`**    | <code>string</code> |
| **`artist`**   | <code>string</code> |
| **`album`**    | <code>string</code> |
| **`duration`** | <code>number</code> |
| **`uri`**      | <code>string</code> |

</docgen-api>
