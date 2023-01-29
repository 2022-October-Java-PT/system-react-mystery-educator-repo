package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Instrument {

    @Id
    @GeneratedValue
    private Long id;
    private String instrumentName;
    private String description;
    private String famousArtist;
    @ManyToMany
    private Collection<HashTag> hashTags;

    public Long getId() {
        return id;
    }

    public String getInstrumentName() {
        return instrumentName;
    }

    public String getDescription() {
        return description;
    }

    public String getFamousArtist() {
        return famousArtist;
    }

    public Collection<HashTag> getHashTags(){
        return hashTags;
    }

    public Instrument(){
    }

    public Instrument(String instrumentName, String description, String famousArtist, HashTag...hashTags) {
        this.instrumentName = instrumentName;
        this.description = description;
        this.famousArtist = famousArtist;
        this.hashTags = new ArrayList<>(Arrays.asList(hashTags));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Instrument that = (Instrument) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public void addHashTag(HashTag hashTagToAdd) {
        hashTags.add(hashTagToAdd);
    }

    public void deleteHashTag(HashTag hashTagToRemove) {
        hashTags.remove(hashTagToRemove);
    }
}
