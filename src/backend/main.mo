import Time "mo:core/Time";
import List "mo:core/List";
import Iter "mo:core/Iter";

actor {
  type Signature = {
    firstName : Text;
    lastName : Text;
    areaCode : Text;
    createdAt : Time.Time;
  };

  let signatures = List.empty<Signature>();

  public query ({ caller }) func getSignatures() : async [Signature] {
    signatures.toArray();
  };

  public query ({ caller }) func getSignatureCount() : async Nat {
    signatures.size();
  };

  public shared ({ caller }) func createSignature(firstName : Text, lastName : Text, areaCode : Text) : async () {
    let newSignature = {
      firstName;
      lastName;
      areaCode;
      createdAt = Time.now();
    };
    signatures.add(newSignature);
  };
};
