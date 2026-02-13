import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Integrate access control
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  var projectZip : ?Blob = null;

  public shared ({ caller }) func uploadProjectZip(projectZipArg : Blob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can upload projects");
    };
    projectZip := ?projectZipArg;
  };

  public query ({ caller }) func downloadProjectZip() : async Blob {
    switch (projectZip) {
      case (null) { Runtime.trap("No project zip found") };
      case (?projectZip) { projectZip };
    };
  };

  public shared ({ caller }) func deleteProjectZip() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can delete projects");
    };
    projectZip := null;
  };
};
