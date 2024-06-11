"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import HeadingRI from "./_component/HeaderRi";
import { Input } from "../ui/input";

interface UserDetail {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  maxLength?: Number;
}

export default function ResumeInformation() {
  const [userDetails, setUserDetails] = useState<Record<string, string>>({});

  const handleChange = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [key]: e.target.value,
    }));
  };

  const getUserDetails = () => {
    const areAllRequiredFieldsFilled = inputFieldInfo.every(
      (field) => !field.required || userDetails[field.name]
    );

    if (!areAllRequiredFieldsFilled) {
      alert("Please fill all the details");
    } else {
      console.log(userDetails);
    }
  };

  const [inputFieldInfo, setInputFieldInfo] = useState<UserDetail[]>([
    {
      name: "name",
      placeholder: "Enter Your Name",
      type: "text",
      onChange: handleChange("name"),
      required: true,
    },
    {
      name: "city",
      placeholder: "Enter Your City",
      type: "text",
      onChange: handleChange("city"),
      required: true,
    },
    {
      name: "province",
      placeholder: "Enter Your Province like Ontario -> ON",
      type: "text",
      onChange: handleChange("province"),
      required: true,
    },
    {
      name: "contactNumber",
      placeholder: "Enter Your Contact Number",
      type: "text",
      onChange: handleChange("contactNumber"),
      required: true,
    },
    {
      name: "email",
      placeholder: "Enter Your Email Address",
      type: "text",
      onChange: handleChange("email"),
      required: true,
    },
    {
      name: "linkedIn",
      placeholder: "Enter Your Linked In Profile URL",
      type: "text",
      onChange: handleChange("linkedIn"),
      required: false,
    },
    {
      name: "portfolio",
      placeholder: "Enter Your Portfolio URL",
      type: "text",
      onChange: handleChange("portfolio"),
      required: false,
    },
    {
      name: "qualification1",
      placeholder:
        "Proficient in Shopify, WordPress, HTML, CSS, JavaScript, React JS and React Native, offering bespoke web solution",
      type: "text",
      onChange: handleChange("qualification1"),
      required: true,
    },
    {
      name: "qualification2",
      placeholder:
        "Expert in transforming concepts into functional web entities.",
      type: "text",
      onChange: handleChange("qualification2"),
      required: true,
    },
    {
      name: "qualification3",
      placeholder:
        "Committed to drive business growth through a robust online presence.",
      type: "text",
      onChange: handleChange("qualification3"),
      required: true,
    },
    {
      name: "educationCourseName",
      placeholder: "Course Name Ex: Computer Programming",
      type: "text",
      onChange: handleChange("courseName"),
      required: true,
    },
    {
      name: "educationCollegeName",
      placeholder: "College Name Ex: Georgian College at ILAC, Toronto, ON",
      type: "text",
      onChange: handleChange("collegeName"),
      required: true,
    },
    {
      name: "educationGraduationTime",
      placeholder: "Expected Graduation August 2025",
      type: "text",
      onChange: handleChange("graduationTime"),
      required: true,
    },
    {
      name: "professionalExperiencePosition",
      placeholder: "Work Position",
      type: "text",
      onChange: handleChange("professionalExperiencePosition"),
      required: true,
    },
    {
      name: "professionalExperienceTime",
      placeholder: "Time  EX:September2022 - May2023",
      type: "text",
      onChange: handleChange("professionalExperienceTime"),
      required: true,
    },
    {
      name: "professionalExperienceCompany",
      placeholder: "Company Name",
      type: "text",
      onChange: handleChange("professionalExperienceCompany"),
      required: true,
    },
    {
      name: "professionalExperiencePoints1",
      placeholder:
        "Your Reposnsibilities: Executed projects with CMS platforms like WordPress and Shopify.",
      type: "text",
      onChange: handleChange("professionalExperiencePoints1"),
      required: true,
    },
    {
      name: "professionalExperiencePoints2",
      placeholder:
        "Your Reposnsibilities: Developed responsive user interfaces with React JS and Firebase.",
      type: "text",
      onChange: handleChange("professionalExperiencePoints2"),
      required: true,
    },
    {
      name: "projectName1",
      placeholder: "Project Name: Resume Builder",
      type: "text",
      onChange: handleChange("projectName1"),
      required: true,
    },
    {
      name: "projectDescription1",
      placeholder: "Project Description: Resume Builder",
      type: "text",
      onChange: handleChange("projectDescription1"),
      required: true,
      maxLength: 299,
    },
    {
      name: "projectTiming1",
      placeholder: "Project Timing: -Feb 2024",
      type: "text",
      onChange: handleChange("projectTiming1"),
      required: true,
    },
    {
      name: "projectURL1",
      placeholder: "Project URL",
      type: "url",
      onChange: handleChange("projectURL1"),
      required: true,
    },
  ]);

  const addNewQualificationInputField = () => {
    const qualificationFields = inputFieldInfo.filter((field) =>
      field.name.startsWith("qualification")
    );
    const lastQualificationField =
      qualificationFields[qualificationFields.length - 1];
    const lastQualificationNumber = parseInt(
      lastQualificationField.name.replace("qualification", ""),
      10
    );
    const newQualificationNumber = lastQualificationNumber + 1;
    const newFieldName = `qualification${newQualificationNumber}`;

    const newInputField: UserDetail = {
      name: newFieldName,
      placeholder: `Enter Qualification`,
      type: "text",
      onChange: handleChange(newFieldName),
      required: true,
    };

    const indexToInsert =
      inputFieldInfo.findIndex(
        (field) => field.name === lastQualificationField.name
      ) + 1;
    const updatedInputFields = [
      ...inputFieldInfo.slice(0, indexToInsert),
      newInputField,
      ...inputFieldInfo.slice(indexToInsert),
    ];

    setInputFieldInfo(updatedInputFields);
  };

  const addNewProfessionalExperienceInputField = () => {
    const qualificationFields = inputFieldInfo.filter((field) =>
      field.name.startsWith("professionalExperience")
    );
    const lastQualificationField =
      qualificationFields[qualificationFields.length - 1];
    const lastQualificationNumber = parseInt(
      lastQualificationField.name.replace("professionalExperience", ""),
      10
    );
    const newQualificationNumber = lastQualificationNumber + 1;
    const newFieldName = `professionalExperience${newQualificationNumber}`;

    const newInputField: UserDetail = {
      name: newFieldName,
      placeholder: `Enter Professional Experience`,
      type: "text",
      onChange: handleChange(newFieldName),
      required: true,
    };

    const indexToInsert =
      inputFieldInfo.findIndex(
        (field) => field.name === lastQualificationField.name
      ) + 1;
    const updatedInputFields = [
      ...inputFieldInfo.slice(0, indexToInsert),
      newInputField,
      ...inputFieldInfo.slice(indexToInsert),
    ];

    setInputFieldInfo(updatedInputFields);
  };

  const addNewProjectInputField = () => {
    const projectFields = inputFieldInfo.filter((field) =>
      field.name.startsWith("project")
    );
    const lastProjectField = projectFields[projectFields.length - 1];
    const lastProjectNumber =
      projectFields.length > 0
        ? parseInt(lastProjectField.name.replace("projectName", ""), 10)
        : 0;
    const newProjectNumber = lastProjectNumber + 1;

    const newFields: UserDetail[] = [
      {
        name: `projectName${newProjectNumber}`,
        placeholder: `Project Name`,
        type: "text",
        onChange: handleChange(`projectName${newProjectNumber}`),
        required: true,
      },
      {
        name: `projectDescription${newProjectNumber}`,
        placeholder: `Project Description`,
        type: "text",
        onChange: handleChange(`projectDescription${newProjectNumber}`),
        required: true,
        maxLength: 299,
      },
      {
        name: `projectTiming${newProjectNumber}`,
        placeholder: `Project Timing: -Feb 2024`,
        type: "text",
        onChange: handleChange(`projectTiming${newProjectNumber}`),
        required: true,
      },
      {
        name: `projectURL${newProjectNumber}`,
        placeholder: `Project URL`,
        type: "url",
        onChange: handleChange(`projectURL${newProjectNumber}`),
        required: true,
      },
    ];

    const lastProjectURLIndex = inputFieldInfo.findIndex((field) =>
      field.name.startsWith("projectURL")
    );
    const indexToInsert =
      lastProjectURLIndex !== -1
        ? lastProjectURLIndex + 1
        : inputFieldInfo.length;

    const updatedInputFields = [
      ...inputFieldInfo.slice(0, indexToInsert),
      ...newFields,
      ...inputFieldInfo.slice(indexToInsert),
    ];

    setInputFieldInfo(updatedInputFields);
  };

  return (
    <main className="flex flex-col items-center p-12 max-w-4xl m-auto gap-10">
      <HeadingRI text="Fill all the details to continue" />
      {inputFieldInfo
        .slice(0, 7)
        .map(({ placeholder, type, onChange, required }, index) => {
          return (
            <Input
              key={index}
              placeholder={placeholder}
              type={type}
              required={required}
              onChange={onChange}
            />
          );
        })}

      <HeadingRI
        text=" Highlight Of qualification"
        span={
          <span className="text-sm text-gray-500 font-bold ml-4">
            Points that make you stand-out
          </span>
        }
      />

      {/* {inputFieldInfo
        .slice(7, 13)
        .map(({ placeholder, type, onChange, required }, index) => {
          return (
            <InputField
              key={index}
              placeholder={placeholder}
              type={type}
              required={required}
              onChange={onChange}
            />
          );
        })} */}

      {inputFieldInfo
        .filter((field) => field.name.includes("qualification"))
        .map(({ placeholder, type, onChange, required }, index) => (
          <Input
            key={index}
            placeholder={placeholder}
            type={type}
            required={required}
            onChange={onChange}
          />
        ))}

      <Button
        className="w-full"
        variant={"outline"}
        onClick={addNewQualificationInputField}
      >
        Add New Point
      </Button>

      <HeadingRI
        text="Your Education"
        span={
          <span className="text-sm text-gray-500 font-bold ml-4">
            Students can enter their ongoing course information
          </span>
        }
      />

      {inputFieldInfo
        .filter((field) => field.name.includes("education"))
        .map(({ placeholder, type, onChange, required }, index) => {
          return (
            <Input
              key={index}
              placeholder={placeholder}
              type={type}
              required={required}
              onChange={onChange}
            />
          );
        })}

      <HeadingRI
        text="Professional Experience"
        span={
          <span className="text-sm text-gray-500 font-bold ml-4">
            Only 1 Professional Experience is required
          </span>
        }
      />

      {inputFieldInfo
        .filter((field) => field.name.includes("professionalExperience"))
        .map(({ placeholder, type, onChange, required }, index) => {
          return (
            <Input
              key={index}
              placeholder={placeholder}
              type={type}
              required={required}
              onChange={onChange}
            />
          );
        })}

      <Button
        className="w-full"
        variant={"outline"}
        onClick={addNewProfessionalExperienceInputField}
      >
        Add New Point
      </Button>

      <HeadingRI
        text="Your Project"
        span={
          <span className="text-sm text-gray-500 font-bold ml-4">
            Few Project Tat you have created
          </span>
        }
      />

      {inputFieldInfo
        .filter((field) => field.name.includes("project"))
        .map(({ placeholder, type, onChange, required }, index) => {
          return (
            <Input
              key={index}
              placeholder={placeholder}
              type={type}
              required={required}
              onChange={onChange}
            />
          );
        })}

      <Button
        className="w-full"
        variant={"outline"}
        onClick={addNewProjectInputField}
      >
        Add New Project
      </Button>

      <Button className="w-full" onClick={getUserDetails}>
        Continue
      </Button>
    </main>
  );
}
