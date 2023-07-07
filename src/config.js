export const crypticVaultContractEthAddress =
  "0x74f5aaC116a5BA54998A0A18ea17451702619A0d";

export const crypticAgreementFactoryEthAddress =
  "0xb6c26AB08cD10431426b1Ac53904d2971e3292CE";

export const shortAddress = (addr) =>
  addr.length > 10 && addr.startsWith("0x")
    ? `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`
    : addr;
