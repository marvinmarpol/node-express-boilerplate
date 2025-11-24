import app from "./app";
import { ENV } from "./config/env";
import { container } from "./core/container";

async function bootstrap() {
  await new container();

  app.listen(ENV.PORT, () => {
    console.log(
      `🚀 Server running on http://localhost:${ENV.PORT} in ${ENV.NODE_ENV} mode`
    );
  });
}

bootstrap();
