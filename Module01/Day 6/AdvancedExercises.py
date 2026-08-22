#Question 9
# -----------------------------
# Account
# -----------------------------

class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return True

        return False


# -----------------------------
# Repository
# -----------------------------

class AccountRepository:

    def save(self, account):
        print("Account saved.")


# -----------------------------
# Notification
# -----------------------------

class Notifier:

    def send(self, message):
        print("Notification:", message)


# -----------------------------
# Bank Service
# -----------------------------

class BankService:

    def __init__(self, repository, notifier):
        self.repository = repository
        self.notifier = notifier

    def withdraw(self, account, amount):

        if account.withdraw(amount):
            self.repository.save(account)
            self.notifier.send("Withdrawal successful.")
        else:
            print("Insufficient funds.")


# Create objects
account = Account("Soliana", 5000)

repository = AccountRepository()
notifier = Notifier()

bank = BankService(repository, notifier)

# Perform withdrawal
bank.withdraw(account, 2000)

#Question 10
# =============================
# Singleton
# =============================

class BankConfig:

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)

            # Bank interest rate
            cls._instance.interest_rate = 0.05

        return cls._instance


# =============================
# Account Classes
# =============================

class Account:

    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance
        self.observers = []

    def add_observer(self, observer):
        self.observers.append(observer)

    def withdraw(self, amount):

        if amount <= self.balance:
            self.balance -= amount

            # Notify observers for large transactions
            if amount > 3000:
                for observer in self.observers:
                    observer.update(self, amount)


class SavingsAccount(Account):

    def add_interest(self):
        config = BankConfig()

        interest = self.balance * config.interest_rate
        self.balance += interest


class CurrentAccount(Account):
    pass


# =============================
# Factory
# =============================

class AccountFactory:

    @staticmethod
    def create(kind, owner, balance):

        if kind == "savings":
            return SavingsAccount(owner, balance)

        elif kind == "current":
            return CurrentAccount(owner, balance)

        return None


# =============================
# Observers
# =============================

class SMSAlert:

    def update(self, account, amount):
        print("SMS: Large transaction detected.")


class AuditLog:

    def update(self, account, amount):
        print("Audit: Transaction recorded.")


# =============================
# Test
# =============================

account = AccountFactory.create(
    "savings",
    "Soliana",
    10000
)

sms = SMSAlert()
audit = AuditLog()

account.add_observer(sms)
account.add_observer(audit)

account.withdraw(5000)