package com.aravind.micro.repositoryimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.aravind.micro.model.Premium;
import com.aravind.micro.repository.PremiumRepo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Repository
@Transactional
public class PremiumRepoImpl implements PremiumRepo {

	@Autowired
	EntityManager entityManager;

	@Override
	public String save(Premium premium) {
		if (premium != null) {
			entityManager.merge(premium);
			return "Succces";
		} else {
			return "Failure";
		}
	}

	@Override
	public String update(Premium premium) {
		if (premium != null) {
			entityManager.merge(premium);
			return "Succces";
		} else {
			return "Failure";
		}
	}

	@Override
	public String delete(int premiumId) {
		Premium id = entityManager.find(Premium.class, premiumId);
		if (id != null) {
			entityManager.remove(id);
			return "Success";
		}
		return "Failure";
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Premium> findAllPremiums() {
		String hql = "from Premium";
		Query query = entityManager.createQuery(hql);
		return query.getResultList();
	}

	@Override
	public Premium findById(int premiumId) {
		return entityManager.find(Premium.class, premiumId);

	}

}
