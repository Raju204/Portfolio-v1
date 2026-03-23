const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
};

const KNOWN_KEYS = {
  PORTFOLIO: "portfolio_data",
  BLOG: "blog_posts",
  ADMIN_SETTINGS: "admin_settings",
};

const CORS_HEADERS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,PUT,DELETE,OPTIONS",
  "access-control-allow-headers": "content-type,authorization",
};

function withCors(response) {
  const headers = new Headers(response.headers);
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...JSON_HEADERS,
      ...CORS_HEADERS,
    },
  });
}

function notFound() {
  return json({ error: "Route not found" }, 404);
}

function unauthorized() {
  return json({ error: "Unauthorized" }, 401);
}

function parseJson(request) {
  return request.json().catch(() => null);
}

function isObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function validateStringField(value, label, errors, options = {}) {
  if (!isString(value)) {
    errors.push(`${label} must be a string`);
    return;
  }
  if (options.minLength && value.trim().length < options.minLength) {
    errors.push(`${label} must be at least ${options.minLength} characters`);
  }
}

function validatePortfolioData(value) {
  const errors = [];
  if (!isObject(value)) {
    return { ok: false, errors: ["portfolio_data must be an object"] };
  }

  const requiredTopLevel = ["hero", "about", "skills", "experience", "education", "contact"];
  requiredTopLevel.forEach((key) => {
    if (!(key in value)) {
      errors.push(`portfolio_data.${key} is required`);
    }
  });

  if (!isObject(value.hero)) {
    errors.push("portfolio_data.hero must be an object");
  } else {
    ["greeting", "name", "tagline", "btnPrimary", "btnSecondary"].forEach((key) => {
      validateStringField(value.hero[key], `portfolio_data.hero.${key}`, errors, { minLength: 1 });
    });
  }

  if (!isObject(value.about)) {
    errors.push("portfolio_data.about must be an object");
  } else {
    ["story", "name", "p1", "p2", "p3", "stat1Label", "stat2Label", "stat3Label"].forEach((key) => {
      validateStringField(value.about[key], `portfolio_data.about.${key}`, errors, { minLength: 1 });
    });
    ["stat1Num", "stat2Num", "stat3Num"].forEach((key) => {
      if (!isNumber(value.about[key])) {
        errors.push(`portfolio_data.about.${key} must be a number`);
      }
    });
  }

  if (!Array.isArray(value.skills)) {
    errors.push("portfolio_data.skills must be an array");
  } else {
    value.skills.forEach((item, index) => {
      if (!isObject(item)) {
        errors.push(`portfolio_data.skills[${index}] must be an object`);
        return;
      }
      ["icon", "title", "desc"].forEach((key) => {
        validateStringField(item[key], `portfolio_data.skills[${index}].${key}`, errors, { minLength: 1 });
      });
      if (!isNumber(item.level)) {
        errors.push(`portfolio_data.skills[${index}].level must be a number`);
      }
    });
  }

  if (!Array.isArray(value.experience)) {
    errors.push("portfolio_data.experience must be an array");
  } else {
    value.experience.forEach((item, index) => {
      if (!isObject(item)) {
        errors.push(`portfolio_data.experience[${index}] must be an object`);
        return;
      }
      ["date", "title", "company", "location", "desc"].forEach((key) => {
        validateStringField(item[key], `portfolio_data.experience[${index}].${key}`, errors, { minLength: 1 });
      });
    });
  }

  if (!Array.isArray(value.education)) {
    errors.push("portfolio_data.education must be an array");
  } else {
    value.education.forEach((item, index) => {
      if (!isObject(item)) {
        errors.push(`portfolio_data.education[${index}] must be an object`);
        return;
      }
      ["date", "title", "institution", "desc"].forEach((key) => {
        validateStringField(item[key], `portfolio_data.education[${index}].${key}`, errors, { minLength: 1 });
      });
      if (item.location !== undefined && !isString(item.location)) {
        errors.push(`portfolio_data.education[${index}].location must be a string when provided`);
      }
    });
  }

  if (!isObject(value.contact)) {
    errors.push("portfolio_data.contact must be an object");
  } else {
    ["email", "phone", "linkedin", "story"].forEach((key) => {
      validateStringField(value.contact[key], `portfolio_data.contact.${key}`, errors, { minLength: 1 });
    });
  }

  return { ok: errors.length === 0, errors };
}

function validateBlogPosts(value) {
  const errors = [];
  if (!Array.isArray(value)) {
    return { ok: false, errors: ["blog_posts must be an array"] };
  }

  value.forEach((post, index) => {
    if (!isObject(post)) {
      errors.push(`blog_posts[${index}] must be an object`);
      return;
    }

    validateStringField(post.id, `blog_posts[${index}].id`, errors, { minLength: 1 });
    validateStringField(post.title, `blog_posts[${index}].title`, errors, { minLength: 1 });

    if (post.category !== undefined && !isString(post.category)) {
      errors.push(`blog_posts[${index}].category must be a string when provided`);
    }
    if (post.date !== undefined && !isString(post.date)) {
      errors.push(`blog_posts[${index}].date must be a string when provided`);
    }
    if (post.coverImage !== undefined && !isString(post.coverImage)) {
      errors.push(`blog_posts[${index}].coverImage must be a string when provided`);
    }
    if (post.content !== undefined && !isString(post.content)) {
      errors.push(`blog_posts[${index}].content must be a string when provided`);
    }
    if (typeof post.published !== "boolean") {
      errors.push(`blog_posts[${index}].published must be a boolean`);
    }
    if (post.createdAt !== undefined && !isString(post.createdAt)) {
      errors.push(`blog_posts[${index}].createdAt must be a string when provided`);
    }
    if (post.updatedAt !== undefined && !isString(post.updatedAt)) {
      errors.push(`blog_posts[${index}].updatedAt must be a string when provided`);
    }
  });

  return { ok: errors.length === 0, errors };
}

function validateAdminSettings(value) {
  const errors = [];
  if (!isObject(value)) {
    return { ok: false, errors: ["admin_settings must be an object"] };
  }

  validateStringField(value.password, "admin_settings.password", errors, { minLength: 4 });
  if (value.updatedAt !== undefined && !isString(value.updatedAt)) {
    errors.push("admin_settings.updatedAt must be a string when provided");
  }

  return { ok: errors.length === 0, errors };
}

function validateByKey(key, value) {
  if (key === KNOWN_KEYS.PORTFOLIO) {
    return validatePortfolioData(value);
  }
  if (key === KNOWN_KEYS.BLOG) {
    return validateBlogPosts(value);
  }
  if (key === KNOWN_KEYS.ADMIN_SETTINGS) {
    return validateAdminSettings(value);
  }
  return { ok: true, errors: [] };
}

function schemaManifest() {
  return {
    [KNOWN_KEYS.PORTFOLIO]: {
      type: "object",
      required: ["hero", "about", "skills", "experience", "education", "contact"],
      note: "Main portfolio content",
    },
    [KNOWN_KEYS.BLOG]: {
      type: "array",
      itemType: "object",
      requiredItemFields: ["id", "title", "published"],
      note: "Blog posts collection",
    },
    [KNOWN_KEYS.ADMIN_SETTINGS]: {
      type: "object",
      required: ["password"],
      note: "Admin panel settings",
    },
  };
}

function isAuthorized(request, env) {
  if (!env.ADMIN_TOKEN) {
    return true;
  }

  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  return token === env.ADMIN_TOKEN;
}

function getKeyFromPath(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 3 && parts[0] === "api" && parts[1] === "entries") {
    return decodeURIComponent(parts[2]);
  }
  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return withCors(new Response(null, { status: 204 }));
    }

    if (url.pathname === "/api/health" && request.method === "GET") {
      return json({ ok: true, service: "portfolio-backend" });
    }

    if (url.pathname === "/api/entries" && request.method === "GET") {
      const prefix = url.searchParams.get("prefix") || undefined;
      const listed = await env.KV.list({ prefix, limit: 100 });
      return json({
        keys: listed.keys.map((k) => ({ name: k.name, expiration: k.expiration ?? null })),
        list_complete: listed.list_complete,
      });
    }

    if (url.pathname === "/api/schemas" && request.method === "GET") {
      return json({ schemas: schemaManifest() });
    }

    const key = getKeyFromPath(url.pathname);

    if (!key) {
      return notFound();
    }

    if (request.method === "GET") {
      const value = await env.KV.get(key, "json");
      if (value === null) {
        return json({ error: "Key not found", key }, 404);
      }
      return json({ key, value });
    }

    if (request.method === "DELETE") {
      if (!isAuthorized(request, env)) {
        return unauthorized();
      }
      await env.KV.delete(key);
      return json({ ok: true, deleted: key });
    }

    if (request.method === "PUT" || request.method === "POST") {
      if (!isAuthorized(request, env)) {
        return unauthorized();
      }

      const body = await parseJson(request);
      if (!body || !Object.prototype.hasOwnProperty.call(body, "value")) {
        return json({ error: "Invalid body. Send JSON with a 'value' field." }, 400);
      }

      const validation = validateByKey(key, body.value);
      if (!validation.ok) {
        return json({
          error: "Schema validation failed",
          key,
          details: validation.errors,
        }, 400);
      }

      const metadata = body.metadata && typeof body.metadata === "object" ? body.metadata : undefined;
      const expirationTtl = Number.isInteger(body.expirationTtl) ? body.expirationTtl : undefined;

      await env.KV.put(key, JSON.stringify(body.value), {
        metadata,
        expirationTtl,
      });

      return json({ ok: true, key });
    }

    return notFound();
  },
};