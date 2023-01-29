package com.example.demo.restcontrollers;

import com.example.demo.models.HashTag;
import com.example.demo.repos.HashTagRepo;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class HashTagController {

    @Resource
    private HashTagRepo hashTagRepo;

    @GetMapping("/api/hashtags")
    public Collection<HashTag> getHashTags() {
        return (Collection<HashTag>) hashTagRepo.findAll();
    }

    @PostMapping("/api/add-hashtag")
    public Collection<HashTag> addHashTag(@RequestBody String body) throws JSONException {
        JSONObject newHashTag = new JSONObject(body);
        String hashTagName = newHashTag.getString("name");
        Optional<HashTag> hashTagToAddOpt = hashTagRepo.findByName(hashTagName);
        if (hashTagToAddOpt.isEmpty()) {
            HashTag hashTagToAdd = new HashTag(hashTagName);
            hashTagRepo.save(hashTagToAdd);
        }
        return (Collection<HashTag>) hashTagRepo.findAll();
    }

    @DeleteMapping("/api/hashtags/{id}/delete-hashtag")
    public Collection<HashTag> deleteHashTag(@PathVariable Long id) throws JSONException {
        Optional<HashTag> hashTagToRemoveOpt = hashTagRepo.findById(id);
        if(hashTagToRemoveOpt.isPresent()){
            hashTagRepo.delete(hashTagToRemoveOpt.get());
        }
        return (Collection<HashTag>) hashTagRepo.findAll();
    }

}
