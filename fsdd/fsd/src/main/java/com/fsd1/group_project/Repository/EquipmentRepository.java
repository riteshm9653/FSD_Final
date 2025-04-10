package com.fsd1.group_project.Repository;

import com.fsd1.group_project.Entity.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    // Add custom query methods if needed
} 