"use client";

import { AdminOnlyServerAction } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const role = useCurrentRole();

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        console.log("OKAY!");
        toast.success("ALLOWED API ROUTE!");
      } else {
        console.error("FORBIDDEN");
        toast.error("FORBIDDEN API ROUTE!");
      }
    });
  };
  const onServerActionClick = () => {
    AdminOnlyServerAction().then((data) => {
      if (data.success) {
        console.log("OKAY!");
        toast.success(data.success);
      } else {
        console.error("FORBIDDEN");
        toast.error(data.error);
      }
    });
  };
  return (
    <div className="flex flex-center flex-col items-center justify-center">
      <Card className="w-[600px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">Admin</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormSuccess message="you're allowed for this route as admin!" />
          </RoleGate>
          <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-md border">
            <p className="text-sm font-medium">Admin only api route</p>
            <Button onClick={onApiRouteClick}>Click to test</Button>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg p-3 shadow-md border">
            <p className="text-sm font-medium">Admin only server action</p>
            <Button onClick={onServerActionClick}>Click to test</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
