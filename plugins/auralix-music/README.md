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
* [`seekTo(...)`](#seekto)
* [`pause()`](#pause)
* [`resume()`](#resume)
* [`stop()`](#stop)
* [`isPlaying()`](#isplaying)
* [`getCurrentPosition()`](#getcurrentposition)
* [`getDuration()`](#getduration)
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


### seekTo(...)

```typescript
seekTo(options: SeekOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#seekoptions">SeekOptions</a></code> |

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


### getCurrentPosition()

```typescript
getCurrentPosition() => Promise<PositionResult>
```

**Returns:** <code>Promise&lt;<a href="#positionresult">PositionResult</a>&gt;</code>

--------------------


### getDuration()

```typescript
getDuration() => Promise<DurationResult>
```

**Returns:** <code>Promise&lt;<a href="#durationresult">DurationResult</a>&gt;</code>

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


#### SeekOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`position`** | <code>number</code> |


#### PlayingResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`playing`** | <code>boolean</code> |


#### PositionResult

| Prop           | Type                |
| -------------- | ------------------- |
| **`position`** | <code>number</code> |


#### DurationResult

| Prop           | Type                |
| -------------- | ------------------- |
| **`duration`** | <code>number</code> |

</docgen-api>
