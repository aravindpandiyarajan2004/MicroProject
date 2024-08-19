package com.aravind.micro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aravind.micro.model.ApplyInsurance;
import com.aravind.micro.serviceimpl.ApplyInsuranceServiceImpl;


@RestController
@RequestMapping("/applyInsurance")
@CrossOrigin("*")
public class ApplyInsuranceController {
	
	@Autowired
	ApplyInsuranceServiceImpl service;
	
	static final String SUCCESS = "Success";
	static final String FAILURE = "Failure";



	@PostMapping
	public String insertApplyInsurance(@RequestParam("insuranceDate") String insuranceDate, @RequestParam("healthIssue") boolean healthIssue, @RequestParam("policyNumber") long policyNumber, @RequestParam("status") String status, @RequestParam("reports") MultipartFile reports) {

		String msg = "";

		try {
			byte[] reportsBytes = reports.getBytes();
			ApplyInsurance apply = new ApplyInsurance(0,insuranceDate,healthIssue,policyNumber,status, reportsBytes,null,null);
			service.addApplyInsurance(apply);
			msg = SUCCESS;
		} catch (Exception e) {
			msg = FAILURE;
		}

		return msg;
	}

	@GetMapping("{applyInsuranceId}")
	public ApplyInsurance getApplyInsuranceById(@PathVariable("applyInsuranceId") int id) {

		return service.getApplyInsurance(id);
	}

	@GetMapping("/all")
	public List<ApplyInsurance> getApplyInsurances() {

		return service.getAllApplyInsurance();
	}

	@PutMapping
	public String updateApplyInsurance(@RequestBody ApplyInsurance applyInsurance) {
		String msg = "";

		try {
			service.updateApplyInsurance(applyInsurance);
			msg = SUCCESS;
		} catch (Exception e) {
			msg = FAILURE;
		}

		return msg;
	}

	@DeleteMapping("{applyInsuranceId}")
	public String deleteApplyInsuranceById(@PathVariable("applyInsuranceId") int id) {
		String msg = "";

		try {
			service.deleteApplyInsurance(id);
			msg = SUCCESS;
		} catch (Exception e) {
			msg = FAILURE;
		}

		return msg;

	}
	
	

}
