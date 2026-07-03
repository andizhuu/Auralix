package com.auralix.music;

public class Song {

    public String title;
    public String artist;
    public String album;
    public long duration;
    public String uri;

    public Song(
            String title,
            String artist,
            String album,
            long duration,
            String uri
    ) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.uri = uri;
    }

}
