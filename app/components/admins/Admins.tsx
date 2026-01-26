"use client";

import { useMemo, useState } from "react";
import { isAddress } from "viem";

type AdminsProps = {
  disabled: boolean;
  adminToCheck: string;
  onChangeAdminToCheck: (value: string) => void;
  shouldCheckAdmin: boolean;
  isAdminChecked?: boolean;
  adminToAdd: string;
  onChangeAdminToAdd: (value: string) => void;
  isAdminAddCandidate?: boolean;
  addSubmitLabel: string;
  addSubmitDisabled: boolean;
  onAddSubmit: (admin: `0x${string}`) => Promise<void> | void;
  adminToRemove: string;
  onChangeAdminToRemove: (value: string) => void;
  isAdminRemoveCandidate?: boolean;
  removeSubmitLabel: string;
  removeSubmitDisabled: boolean;
  onRemoveSubmit: (admin: `0x${string}`) => Promise<void> | void;
};

export default function Admins({
  disabled,
  adminToCheck,
  onChangeAdminToCheck,
  shouldCheckAdmin,
  isAdminChecked,
  adminToAdd,
  onChangeAdminToAdd,
  isAdminAddCandidate,
  addSubmitLabel,
  addSubmitDisabled,
  onAddSubmit,
  adminToRemove,
  onChangeAdminToRemove,
  isAdminRemoveCandidate,
  removeSubmitLabel,
  removeSubmitDisabled,
  onRemoveSubmit,
}: AdminsProps) {
  const [addFailed, setAddFailed] = useState(false);
  const [removeFailed, setRemoveFailed] = useState(false);

  const checkLabel = useMemo(() => {
    if (adminToCheck.length === 0) {
      return "Enter an address to check.";
    }
    if (!shouldCheckAdmin) {
      return "Invalid address.";
    }
    return isAdminChecked ? "Admin" : "Not admin";
  }, [adminToCheck.length, isAdminChecked, shouldCheckAdmin]);

  const addAddressValid = useMemo(() => {
    if (!adminToAdd.trim()) {
      return false;
    }
    return isAddress(adminToAdd);
  }, [adminToAdd]);

  const removeAddressValid = useMemo(() => {
    if (!adminToRemove.trim()) {
      return false;
    }
    return isAddress(adminToRemove);
  }, [adminToRemove]);

  const addHelperText = useMemo(() => {
    if (addFailed) {
      return "Adding admin is failed.";
    }
    if (!adminToAdd.trim()) {
      return "Enter an address to add as admin.";
    }
    if (!addAddressValid) {
      return "Admin address must be a valid address.";
    }
    return isAdminAddCandidate ? "The address is already admin." : "The address is not admin.";
  }, [addAddressValid, addFailed, adminToAdd, isAdminAddCandidate]);

  const removeHelperText = useMemo(() => {
    if (removeFailed) {
      return "Remove admin is failed.";
    }
    if (!adminToRemove.trim()) {
      return "Enter the admin address to remove.";
    }
    if (!removeAddressValid) {
      return "Admin address must be a valid address.";
    }
    return isAdminRemoveCandidate ? "The address is already admin." : "The address is not admin.";
  }, [adminToRemove, isAdminRemoveCandidate, removeAddressValid, removeFailed]);

  const addButtonDisabled = useMemo(() => {
    if (!addAddressValid) {
      return true;
    }
    if (isAdminAddCandidate) {
      return true;
    }
    return disabled || addSubmitDisabled;
  }, [addAddressValid, addSubmitDisabled, disabled, isAdminAddCandidate]);

  const removeButtonDisabled = useMemo(() => {
    if (!removeAddressValid) {
      return true;
    }
    if (!isAdminRemoveCandidate) {
      return true;
    }
    return disabled || removeSubmitDisabled;
  }, [disabled, isAdminRemoveCandidate, removeAddressValid, removeSubmitDisabled]);

  return (
    <>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Check Admin Address</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={adminToCheck}
          onChange={(event) => onChangeAdminToCheck(event.target.value)}
          placeholder="0x..."
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
        <div className="text-xs text-zinc-500">{checkLabel}</div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Add Admin</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={adminToAdd}
          onChange={(event) => {
            setAddFailed(false);
            onChangeAdminToAdd(event.target.value);
          }}
          placeholder="0x..."
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
        <div className="text-xs text-zinc-500">{addHelperText}</div>
        <button
          type="button"
          className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={async () => {
            if (addButtonDisabled) {
              return;
            }
            try {
              await onAddSubmit(adminToAdd as `0x${string}`);
              setAddFailed(false);
            } catch {
              setAddFailed(true);
            }
          }}
          disabled={addButtonDisabled}>
          {addSubmitLabel}
        </button>
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-zinc-400">Remove Admin</label>
        <input
          className="rounded-md border border-zinc-700 bg-black px-3 py-2 text-sm"
          value={adminToRemove}
          onChange={(event) => {
            setRemoveFailed(false);
            onChangeAdminToRemove(event.target.value);
          }}
          placeholder="0x..."
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
        />
        <div className="text-xs text-zinc-500">{removeHelperText}</div>
        <button
          type="button"
          className="rounded-md border border-zinc-600 bg-black px-4 py-2 text-sm font-semibold text-zinc-100 cursor-pointer hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={async () => {
            if (removeButtonDisabled) {
              return;
            }
            try {
              await onRemoveSubmit(adminToRemove as `0x${string}`);
              setRemoveFailed(false);
            } catch {
              setRemoveFailed(true);
            }
          }}
          disabled={removeButtonDisabled}>
          {removeSubmitLabel}
        </button>
      </div>
    </>
  );
}
