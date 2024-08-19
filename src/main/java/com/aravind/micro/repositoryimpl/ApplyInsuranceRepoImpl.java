package com.aravind.micro.repositoryimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.aravind.micro.model.ApplyInsurance;
import com.aravind.micro.repository.ApplyInsuranceRepo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class ApplyInsuranceRepoImpl implements ApplyInsuranceRepo {

	@Autowired
	EntityManager entityManager;

	@Override
	public String save(ApplyInsurance applyInsurance) {
		if (applyInsurance != null) {
			entityManager.merge(applyInsurance);
			return "Success";
		} else {
			return "Failure";
		}
	}

	@Override
	public String update(ApplyInsurance applyInsurance) {
		if (applyInsurance != null) {
			entityManager.merge(applyInsurance);
			return "Success";
		} else {
			return "Failure";
		}
	}

	@Override
	public String delete(int applyInsuranceId) {
		ApplyInsurance id = entityManager.find(ApplyInsurance.class, applyInsuranceId);
		if (id != null) {
			entityManager.remove(id);
			return "Success";
		}
		return "Failure";
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ApplyInsurance> findAllApplyInsurance() {
		String hql = "from ApplyInsurance";
		Query query = entityManager.createQuery(hql);
		return query.getResultList();
	}

	@Override
	public ApplyInsurance findById(int applyInsuranceId) {
		return entityManager.find(ApplyInsurance.class, applyInsuranceId);
	}

}
