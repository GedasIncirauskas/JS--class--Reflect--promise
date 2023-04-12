export class Http {
  static fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
