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

* [`requestPermission()`](#requestpermission)
* [`getSongs()`](#getsongs)
* [`play(...)`](#play)
* [`pause()`](#pause)
* [`resume()`](#resume)
* [`stop()`](#stop)
* [`isPlaying()`](#isplaying)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestPermission()

```typescript
requestPermission() => Promise<PermissionResult>
```

**Returns:** <code>Promise&lt;<a href="#permissionresult">PermissionResult</a>&gt;</code>

--------------------


### getSongs()

```typescript
getSongs() => Promise<SongsResult>
```

**Returns:** <code>Promise&lt;<a href="#songsresult">SongsResult</a>&gt;</code>

--------------------


### play(...)

```typescript
play(options: PlayOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#playoptions">PlayOptions</a></code> |

--------------------


### pause()

```typescript
pause() => Promise<void>
```

--------------------


### resume()

```typescript
resume() => Promise<void>
```

--------------------


### stop()

```typescript
stop() => Promise<void>
```

--------------------


### isPlaying()

```typescript
isPlaying() => Promise<PlayingResult>
```

**Returns:** <code>Promise&lt;<a href="#playingresult">PlayingResult</a>&gt;</code>

--------------------


### Interfaces


#### PermissionResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`granted`** | <code>boolean</code> |


#### SongsResult

| Prop        | Type                |
| ----------- | ------------------- |
| **`songs`** | <code>Song[]</code> |


#### Song

| Prop           | Type                |
| -------------- | ------------------- |
| **`title`**    | <code>string</code> |
| **`artist`**   | <code>string</code> |
| **`album`**    | <code>string</code> |
| **`duration`** | <code>number</code> |
| **`uri`**      | <code>string</code> |


#### PlayOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`uri`** | <code>string</code> |


#### PlayingResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`playing`** | <code>boolean</code> |

</docgen-api>
