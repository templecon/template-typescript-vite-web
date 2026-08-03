import { readFileSync } from "node:fs";

// Decide solely from the ref updates pre-push provides on stdin. Do not reject
// an unrelated ref merely because the current checkout is on a local/* branch.
const pushedRefs: string[] = readFileSync(0, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim().split(/\s+/)[0])
    .filter(
        (ref): ref is string => ref?.startsWith("refs/heads/local/") === true
    );

const localBranch = pushedRefs[0];
if (!localBranch) {
    process.exit(0);
}
const branchName = localBranch.slice("refs/heads/local/".length);
const devBranch = `dev/${branchName}`;
const message = [
    `Refusing to push ${branchName}.`,
    "Branches under local/* are for local work only, not for pushing.",
    `Rename it to ${devBranch} before pushing:`,
    `  git branch -m ${devBranch}`,
    `  git push -u origin ${devBranch}`,
].join("\n");
process.stderr.write(`${message}\n`);
process.exit(1);
