package com.dellemc.iot.provisioning.model.repository;

import com.dellemc.iot.provisioning.model.domain.ProvisioningStatus1;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ProvisioningStatus1 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProvisioningStatus1Repository extends JpaRepository<ProvisioningStatus1, Long> {

}
