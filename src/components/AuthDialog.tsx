
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from '@/components/ui/icon';

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ open, onOpenChange }) => {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {activeTab === "login" ? "Вход в аккаунт" : "Регистрация"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {activeTab === "login" 
              ? "Войдите, чтобы получить доступ к вашим заказам и личным данным" 
              : "Создайте аккаунт для удобных покупок и отслеживания заказов"}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-login">Email</Label>
              <Input id="email-login" type="email" placeholder="mail@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-login">Пароль</Label>
                <Button variant="link" className="p-0 h-auto text-xs">Забыли пароль?</Button>
              </div>
              <Input id="password-login" type="password" />
            </div>
            <Button className="w-full">
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Войти
            </Button>
            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">или войти через</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                <Icon name="Facebook" className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              <Button variant="outline">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Имя</Label>
                <Input id="first-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Фамилия</Label>
                <Input id="last-name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-register">Email</Label>
              <Input id="email-register" type="email" placeholder="mail@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-register">Пароль</Label>
              <Input id="password-register" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтвердите пароль</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button className="w-full">
              <Icon name="UserPlus" className="mr-2 h-4 w-4" />
              Зарегистрироваться
            </Button>
            
            <p className="text-center text-xs text-muted-foreground">
              Регистрируясь, вы соглашаетесь с нашими <a href="#" className="underline">Условиями использования</a> и <a href="#" className="underline">Политикой конфиденциальности</a>.
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
