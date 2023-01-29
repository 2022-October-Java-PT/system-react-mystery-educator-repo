package com.example.demo.repos;

import com.example.demo.models.HashTag;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface HashTagRepo extends CrudRepository<HashTag, Long> {
    Optional<HashTag> findByName(String hashTagName);
}