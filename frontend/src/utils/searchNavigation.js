export const cleanEntityId = (value, prefix = "") => {
  let id = String(value ?? "").trim();

  if (!id) return "";

  if (prefix && id.startsWith(`${prefix}-`)) {
    id = id.slice(prefix.length + 1);
  }

  return id;
};

export const getEventHashId = (event) =>
  `event-${cleanEntityId(event?.id, "event")}`;

export const getMonkHashId = (monk) =>
  `monk-${cleanEntityId(monk?.id, "monk")}`;

export const getMediaHashId = (media) =>
  `media-${cleanEntityId(media?.id, "media")}`;