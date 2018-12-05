import Users from "../src/users.api";

it("API Test", async function() {
  global.fetch = jest.fn().mockImplementation(() => {
    let promise = new Promise((resolve, reject) => {
      resolve({
        json: function() {
          return { Id: 1 };
        }
      });
    });
    return promise;
  });

  const response = await Users.all();
  expect(response.Id).toBe(1);
});
