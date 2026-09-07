def apply_discount(price, percent=10):
    return price - (price * percent / 100)

print(apply_discount(100))
print(apply_discount(100, 20))