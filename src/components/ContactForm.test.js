import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("render without errors", ()=>{
    render(<ContactForm />);
});

test("form can be filled in", ()=>{

    const { getByTestId, findAllbyText, getByLabelText, getByText, findByText, queryByText, container, getAllByText } = render(<ContactForm />);

    // const firstNameInput = getByText(/first name/i);
    // expect(firstNameInput).toBeInTheDocument();

    const firstNameInput = container.querySelector("[name = 'firstName']")
    // console.log(firstNameInput)
    // console.log(firstNameInput.value)
    expect(firstNameInput).toBeInTheDocument();
    fireEvent.change(firstNameInput, { target: { value: "edd" }});
    // console.log(firstNameInput.value)
    expect(firstNameInput).toHaveValue("edd");

    

    // const lastNameInput = getByText(/last name/i);
    // expect(lastNameInput).toBeInTheDocument();

    const lastNameInput = container.querySelector("[name = 'lastName']")
    // console.log(lastNameInput)
    // console.log(lastNameInput.value)
    expect(lastNameInput).toBeInTheDocument();
    fireEvent.change(lastNameInput, { target: { value: "test" }});
    // console.log(lastNameInput.value)
    expect(lastNameInput).toHaveValue("test");

    // fireEvent.change(lastNameInput, { target: { value: "test" }});
    // expect(lastNameInput).toHaveValue("test");

    const emailInput = container.querySelector("[name = 'email']")
    // console.log(emailInput)
    // console.log(emailInput.value)
    fireEvent.change(emailInput, { target: { value: "test" }});
    // console.log(emailInput.value)
    expect(emailInput).toHaveValue("test");

    // const submit = container.querySelector("[type = 'submit']");
    // console.log(submit)
    // act(() => {
    //     /* fire events that update state */
    //     fireEvent.click(submit);
    // });
    // findAllByText(/edd/i);
});