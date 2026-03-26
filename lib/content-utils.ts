const datePrefixPattern = /^(\d{4})-(\d{2})-(\d{2})[-_\s]+(.+)$/;

export function filenameToTitle(filename: string, extensionPattern: RegExp) {
  const baseName = filename.replace(extensionPattern, "");
  const dateMatch = baseName.match(datePrefixPattern);
  const titleSource = dateMatch ? dateMatch[4] : baseName;

  return titleSource
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      if (!word) {
        return word;
      }

      if (/^[A-Z0-9]+$/.test(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function inferDateFromFilename(filename: string, extensionPattern: RegExp) {
  const baseName = filename.replace(extensionPattern, "");
  const dateMatch = baseName.match(datePrefixPattern);

  if (!dateMatch) {
    return undefined;
  }

  const [, year, month, day] = dateMatch;
  const isoDate = `${year}-${month}-${day}`;
  const parsed = new Date(`${isoDate}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return undefined;
  }

  return isoDate;
}

export function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));
}

export function createSlugFromFilename(filename: string, extensionPattern: RegExp) {
  return filename
    .replace(extensionPattern, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function sortByDateThenTitle<T extends { title: string; date?: string }>(a: T, b: T) {
  if (a.date && b.date) {
    return b.date.localeCompare(a.date);
  }

  if (a.date) {
    return -1;
  }

  if (b.date) {
    return 1;
  }

  return a.title.localeCompare(b.title);
}
