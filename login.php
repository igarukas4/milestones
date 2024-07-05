<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </head>
  <body class="d-flex justify-content-center align-items-center vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-body">
              <div class="text-center mb-4">
                <img
                  src="./assets/logoK.png"
                  alt="Kaltara Water Logo"
                  width="130"
                />
                <h5 class="card-title mt-3">Silahkan Masuk</h5>
              </div>
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Alamat Email"
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="rememberme"
                  />
                  <label class="form-check-label" for="rememberme"
                    >Remember me</label
                  >
                </div>
                <button type="submit" class="btn btn-warning w-100 mb-3">
                  Sign In
                </button>
                <div class="text-center mb-1">
                  <small>Belum punya akun? </small>
                </div>
                <button type="submit" class="btn btn-info w-100">
                  <a class="nav-link" href="./register.html"> Daftar</a>
                </button>

                <div class="text-center mt-3">
                  <small class="text-muted">Kaltara Water &copy 2024</small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
