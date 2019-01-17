package com.dellemc.iot.provisioning.model.repository;

import com.dellemc.iot.provisioning.model.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
