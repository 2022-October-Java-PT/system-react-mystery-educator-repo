package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

@Entity
public class HashTag {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToMany(mappedBy ="hashTags")
    @JsonIgnore
    private Collection<Instrument> instruments;

    public HashTag(){
    }

    public Long getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public Collection<Instrument> getInstruments(){
        return instruments;
    }

    public HashTag(String name) {
        this.name = name;
        instruments = new ArrayList<>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HashTag hashTag = (HashTag) o;
        return Objects.equals(id, hashTag.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
