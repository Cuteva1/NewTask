import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import React from "react";

export default function PersonalInformation({ step, setStep }) {
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values) => {
    setStep(step + 1);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      validateMessages={validateMessages}
    >
      <h2 className="mb-5">Student Personal Information</h2>
      <div className="grid grid-cols-3 gap-4 mb-5">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Middle Name" name="MiddleName">
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth (AD)"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
            <Radio value={3}>Others</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Nationality"
          name="nationality"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Religion"
          name="religion"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select your religion"
            className="w-full"
            options={[
              {
                value: "hinduism",
                label: "Hinduism",
              },
              {
                value: "buddhism",
                label: "Buddhism",
              },
              {
                value: "christianity",
                label: "Christianity",
              },
              {
                value: "sikhism",
                label: "Sikhism",
              },
              {
                value: "islam",
                label: "Islam",
              },
              {
                value: "others",
                label: "Others",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Blood Group"
          name="bloodGroup"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select your blood group"
            className="w-full"
            options={[
              {
                value: "A+",
                label: "A+",
              },
              {
                value: "A-",
                label: "A-",
              },
              {
                value: "B+",
                label: "B+",
              },
              {
                value: "B-",
                label: "B-",
              },
              {
                value: "AB+",
                label: "AB+",
              },
              {
                value: "AB-",
                label: "AB-",
              },
              {
                value: "O+",
                label: "O+",
              },
              {
                value: "O-",
                label: "O-",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Academic Programs"
          name="academicPrograms"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select academic programs"
            className="w-full"
            options={[
              {
                value: "Science",
                label: "Science",
              },
              {
                value: "management",
                label: "Management",
              },
              {
                value: "humanities",
                label: "Humanities",
              },
              {
                value: "fineArts",
                label: "Fine Arts",
              },
              {
                value: "law",
                label: "Law",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Current Address"
          name="currentAddress"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Permanent Address"
          name="permanentAddress"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          // onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </Form.Item>
    </Form>
  );
}
