/**
 * PersonalCloud.tsx
 * -----------------------------------------------------------------------
 * A single-page personal media archive backed by an Appwrite Storage
 * bucket. No login — anyone with the link can view/download, so only
 * use this with a bucket whose read permission is set to "Any".
 *
 * This version talks to Appwrite's REST API directly with fetch()
 * (no "appwrite" npm package needed), so it also runs as-is in
 * sandboxes that only allow a fixed set of libraries.
 *
 * SETUP (do this before running):
 * 1. In your Appwrite console, on the bucket you want to use:
 *      Settings -> Permissions -> add Read for role "Any".
 *      (Leave Create/Update/Delete OFF for "Any" — you don't want
 *      strangers uploading to or deleting from your bucket.)
 * 2. Project Settings -> Platforms -> add your web app's origin
 *      (e.g. http://localhost:5173) as a Web App platform.
 * 3. Fill in the three constants below: APPWRITE_ENDPOINT,
 *      APPWRITE_PROJECT_ID, APPWRITE_BUCKET_ID.
 * 4. Drop <PersonalCloud /> into your app (e.g. App.tsx).
 *
 * Uploading files: this page is view + download only, by design (no
 * login means no safe way to expose an upload button publicly).
 * Upload new photos/videos from the Appwrite console's Storage tab.
 * -----------------------------------------------------------------------
 */

import { useEffect, useMemo, useState } from "react";

// ---- 1. Fill these in -----------------------------------------------
const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "YOUR_PROJECT_ID";
const APPWRITE_BUCKET_ID = "YOUR_BUCKET_ID";
// -----------------------------------------------------------------------

interface AppwriteFile {
  $id: string;
  name: string;
  mimeType: string;
  sizeOriginal: number;
}

interface ListFilesResponse {
  total: number;
  files: AppwriteFile[];
}

type MediaKind = "image" | "video" | "other";

function kindOf(mimeType: string): MediaKind {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  return "other";
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(1)} ${units[unitIndex]}`;
}

function fileViewUrl(fileId: string): string {
  return `${APPWRITE_ENDPOINT}/storage/buckets/${APPWRITE_BUCKET_ID}/files/${fileId}/view?project=${APPWRITE_PROJECT_ID}`;
}

function fileDownloadUrl(fileId: string): string {
  return `${APPWRITE_ENDPOINT}/storage/buckets/${APPWRITE_BUCKET_ID}/files/${fileId}/download?project=${APPWRITE_PROJECT_ID}`;
}

export default function PersonalCloud() {
  const [files, setFiles] = useState<AppwriteFile[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function loadFiles() {
      try {
        const response = await fetch(
          `${APPWRITE_ENDPOINT}/storage/buckets/${APPWRITE_BUCKET_ID}/files`,
          {
            headers: {
              "X-Appwrite-Project": APPWRITE_PROJECT_ID,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Appwrite returned status ${response.status}`);
        }

        const data: ListFilesResponse = await response.json();
        if (!cancelled) {
          setFiles(data.files);
          setStatus("ready");
        }
      } catch (err) {
        if (!cancelled) {
          setErrorMessage(
            err instanceof Error ? err.message : "Could not reach the archive."
          );
          setStatus("error");
        }
      }
    }

    loadFiles();
    return () => {
      cancelled = true;
    };
  }, []);

  const catalog = useMemo(
    () =>
      files.map((file, index) => ({
        file,
        index: index + 1,
        kind: kindOf(file.mimeType),
        previewUrl: fileViewUrl(file.$id),
        downloadUrl: fileDownloadUrl(file.$id),
      })),
    [files]
  );

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <p style={styles.eyebrow}>PRIVATE ARCHIVE</p>
        <h1 style={styles.title}>The Vault</h1>
        <p style={styles.subtitle}>
          {status === "ready"
            ? `${catalog.length} item${catalog.length === 1 ? "" : "s"} on file`
            : "Your own photos and videos, kept in one place."}
        </p>
      </header>

      <main style={styles.main}>
        {status === "loading" && (
          <p style={styles.statusText}>Opening the vault…</p>
        )}

        {status === "error" && (
          <div style={styles.statusBox}>
            <p style={styles.statusTextError}>The vault didn't open.</p>
            <p style={styles.statusSubtext}>{errorMessage}</p>
            <p style={styles.statusSubtext}>
              Check that APPWRITE_PROJECT_ID / APPWRITE_BUCKET_ID are filled
              in and that this origin is added under Platforms in your
              Appwrite project.
            </p>
          </div>
        )}

        {status === "ready" && catalog.length === 0 && (
          <div style={styles.statusBox}>
            <p style={styles.statusText}>Nothing filed yet.</p>
            <p style={styles.statusSubtext}>
              Upload a photo or video from the Appwrite console to see it
              here.
            </p>
          </div>
        )}

        {status === "ready" && catalog.length > 0 && (
          <div style={styles.grid}>
            {catalog.map(({ file, index, kind, previewUrl, downloadUrl }) => (
              <article key={file.$id} style={styles.card}>
                <div style={styles.perforationRow}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} style={styles.hole} />
                  ))}
                </div>

                <div style={styles.frame}>
                  {kind === "image" && (
                    <img
                      src={previewUrl}
                      alt={file.name}
                      style={styles.media}
                    />
                  )}
                  {kind === "video" && (
                    <video src={previewUrl} controls style={styles.media} />
                  )}
                  {kind === "other" && (
                    <div style={styles.unsupported}>
                      <span>No preview</span>
                    </div>
                  )}
                </div>

                <div style={styles.perforationRow}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} style={styles.hole} />
                  ))}
                </div>

                <div style={styles.caption}>
                  <span style={styles.captionIndex}>
                    {String(index).padStart(3, "0")}
                  </span>
                  <span style={styles.captionName}>{file.name}</span>
                  <span style={styles.captionMeta}>
                    {formatBytes(file.sizeOriginal)}
                  </span>
                </div>

                <a
                  href={downloadUrl}
                  download={file.name}
                  style={styles.downloadButton}
                >
                  ↓ Download
                </a>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ---- Styles -------------------------------------------------------------
// Warm, dark "archive" palette. Deliberately not a login screen, not a
// dashboard — just a quiet catalog of your own things.

const palette = {
  background: "#14110F",
  card: "#1E1A16",
  border: "#33291F",
  text: "#EDE6DC",
  muted: "#8A8177",
  accent: "#C97A3D",
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: palette.background,
    color: palette.text,
    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    padding: "48px 24px 96px",
  },
  header: {
    maxWidth: 960,
    margin: "0 auto 56px",
    textAlign: "center",
  },
  eyebrow: {
    letterSpacing: "0.25em",
    fontSize: 12,
    color: palette.accent,
    marginBottom: 12,
  },
  title: {
    fontFamily: "'Fraunces', Georgia, serif",
    fontWeight: 600,
    fontSize: "clamp(40px, 6vw, 64px)",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  subtitle: {
    color: palette.muted,
    marginTop: 12,
    fontSize: 14,
  },
  main: {
    maxWidth: 1200,
    margin: "0 auto",
  },
  statusText: {
    textAlign: "center",
    color: palette.text,
    fontSize: 15,
  },
  statusTextError: {
    textAlign: "center",
    color: palette.accent,
    fontSize: 15,
    margin: 0,
  },
  statusSubtext: {
    textAlign: "center",
    color: palette.muted,
    fontSize: 13,
    marginTop: 8,
  },
  statusBox: {
    padding: "64px 24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 28,
  },
  card: {
    background: palette.card,
    border: `1px solid ${palette.border}`,
    borderRadius: 4,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  perforationRow: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "6px 8px",
    background: palette.background,
  },
  hole: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: palette.border,
  },
  frame: {
    background: "#0B0A08",
    aspectRatio: "4 / 3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  unsupported: {
    color: palette.muted,
    fontSize: 13,
  },
  caption: {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    padding: "12px 14px 4px",
  },
  captionIndex: {
    color: palette.accent,
    fontSize: 12,
  },
  captionName: {
    flex: 1,
    fontSize: 13,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  captionMeta: {
    color: palette.muted,
    fontSize: 11,
  },
  downloadButton: {
    display: "block",
    textAlign: "center",
    margin: "14px",
    padding: "10px 0",
    borderRadius: 3,
    border: `1px solid ${palette.accent}`,
    color: palette.accent,
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: "0.05em",
  },
};
