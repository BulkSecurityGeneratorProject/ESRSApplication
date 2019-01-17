package com.dellemc.iot.provisioning.model.repository;

import com.dellemc.iot.provisioning.model.domain.ProvisioningStatus;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ProvisioningStatus entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProvisioningStatusRepository extends JpaRepository<ProvisioningStatus, Long> {

}
