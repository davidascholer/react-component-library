// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import userEvent, { UserEvent } from "@testing-library/user-event";
// import "@testing-library/jest-dom";
// import { Provider } from "react-redux";
// import FindUser from "../../src/views/common/Components/FindUser";
// import { call } from "../../src/utilities/connection";
// import storeMock, { getState } from "./helpers/storeMock";
// import nimbioServer from "../../src/server/endpoints";

// /* mocks for this suite */
// jest.mock("../../src/utilities/connection.ts");
// jest.mock("../../src/utilities/connector.ts");

// /* test suite */
// describe("Find User", () => {
//   const handleClose = jest.fn();
//   const clickUser = jest.fn();
//   let tree = (state: any = {}) => {
//     const store = storeMock({ ...state });
//     return render(
//       <Provider store={store}>
//         {/*@ts-ignore*/}
//         <FindUser onClick={clickUser} onClose={handleClose} />
//       </Provider>
//     );
//   };

//   it("allows for searching by first, last, and phone", async () => {
//     tree();
//     const firstName = screen.getByTestId("find-user-first-name").querySelector("input")!!;
//     const lastName = screen.getByTestId("find-user-last-name").querySelector("input")!!;
//     const phone = screen.getByTestId("find-user-phone").querySelector("input")!!;
//     expect(firstName).toBeInTheDocument();
//     expect(lastName).toBeInTheDocument();
//     expect(phone).toBeInTheDocument();

//     const user: UserEvent = userEvent.setup();
//     await user.type(firstName, "John");
//     await user.type(lastName, "Doe");
//     await user.type(phone, "1234567890");
//     await user.click(screen.getByTestId("find-user-search"));
//     expect(call).toHaveBeenCalledTimes(1);
//     expect(call).toHaveBeenCalledWith(nimbioServer.admin.findUser, ["John", "Doe", "1234567890"], "admin-find-user");
//   });
//   it("allows for searching by first name", async () => {
//     tree();
//     const firstName = screen.getByTestId("find-user-first-name").querySelector("input")!!;
//     expect(firstName).toBeInTheDocument();
//     const user: UserEvent = userEvent.setup();
//     await user.type(firstName, "John");
//     await user.click(screen.getByTestId("find-user-search"));
//     expect(call).toHaveBeenCalledTimes(1);
//     expect(call).toHaveBeenCalledWith(nimbioServer.admin.findUser, ["John", "", ""], "admin-find-user");
//   });

//   it("allows for searching by last name", async () => {
//     tree();
//     const lastName = screen.getByTestId("find-user-last-name").querySelector("input")!!;
//     expect(lastName).toBeInTheDocument();
//     const user: UserEvent = userEvent.setup();
//     await user.type(lastName, "Doe");
//     await user.click(screen.getByTestId("find-user-search"));
//     expect(call).toHaveBeenCalledTimes(1);
//     expect(call).toHaveBeenCalledWith(nimbioServer.admin.findUser, ["", "Doe", ""], "admin-find-user");
//   });

//   it("allows for searching by phone", async () => {
//     tree();
//     const phone = screen.getByTestId("find-user-phone").querySelector("input")!!;
//     expect(phone).toBeInTheDocument();
//     const user: UserEvent = userEvent.setup();
//     await user.type(phone, "1234567890");
//     await user.click(screen.getByTestId("find-user-search"));
//     expect(call).toHaveBeenCalledTimes(1);
//     expect(call).toHaveBeenCalledWith(nimbioServer.admin.findUser, ["", "", "1234567890"], "admin-find-user");
//   });

//   it("displays search results", async () => {
//     tree({
//       findUser: {
//         phone_number: "",
//         loading: false,
//         error: false,
//         result: [
//           {
//             id: "038e13f0-61ad-4c5f-bb5f-eb99533db480",
//             first_name: "Foo",
//             last_name: "bar",
//             phone_numbers: ["+15552302160"],
//             installer: false,
//             admin: false,
//             distributor: false,
//           },
//         ],
//         loaded: true,
//       },
//     });
//     expect(screen.getByTestId("find-user-search-result")).toBeInTheDocument();
//   });
// });
