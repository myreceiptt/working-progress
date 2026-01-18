"use client";

import type {
  ChangeEvent,
  FormEvent,
} from "react";

type FormState = {
  id: string;
  name: string;
  description: string;
  pageUrl: string;
  imageSvg: string;
};

type MetadataTabProps = {
  form: FormState;
  status: string | null;
  isLoading: boolean;
  onSubmit: (event: FormEvent) => void;
  onChange: (
    key: keyof FormState,
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  tokenIds: number[];
  selectedTokenId: string;
  onSelectTokenId: (value: string) => void;
  nextTokenId: number;
};

export default function MetadataTab({
  form,
  status,
  isLoading,
  onSubmit,
  onChange,
  tokenIds,
  selectedTokenId,
  onSelectTokenId,
  nextTokenId,
}: MetadataTabProps) {
  return (
    <form
      className="grid gap-4 rounded-md border border-zinc-800 p-6"
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Token ID</label>
        <select
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={selectedTokenId}
          onChange={(event) => onSelectTokenId(event.target.value)}
        >
          {tokenIds.map((tokenId) => (
            <option key={tokenId} value={tokenId.toString()}>
              Token ID {tokenId}
            </option>
          ))}
          <option value="new">Add Next ID ({nextTokenId})</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Selected ID</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={form.id}
          onChange={onChange("id")}
          placeholder="1"
          readOnly
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Name</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={form.name}
          onChange={onChange("name")}
          placeholder="Welcome Receipt ✍️"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Description</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={form.description}
          onChange={onChange("description")}
          placeholder="Proof of reading the Welcome page."
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Page URL</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={form.pageUrl}
          onChange={onChange("pageUrl")}
          placeholder="https://nota.endhonesa.com/"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">SVG (raw)</label>
        <textarea
          className="min-h-[140px] rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={form.imageSvg}
          onChange={onChange("imageSvg")}
          placeholder="<svg ...></svg>"
        />
      </div>
      <button
        className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save Metadata"}
      </button>
      {status ? <p className="text-xs text-zinc-400">{status}</p> : null}
    </form>
  );
}
