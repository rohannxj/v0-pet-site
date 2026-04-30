import requests
from bs4 import BeautifulSoup
import csv

URL = "https://your-store-url.com/products"  # Replace with actual URL

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

response = requests.get(URL, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

products = []

for card in soup.select("div.col-sp-6.col-st-6.col-3"):
    # Get SKU name
    name_el = card.select_one(".product-card__heading.animation-underline.animation-underline--thin")
    
    # Get image
    img_el = card.select_one(".image-show--fadein.image-loaded")

    if name_el and img_el:
        products.append({
            "sku_name": name_el.get_text(strip=True),
            "image_url": img_el.get("src") or img_el.get("data-src") or img_el.get("data-lazy")
        })

# Save to CSV
with open("products.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["sku_name", "image_url"])
    writer.writeheader()
    writer.writerows(products)

print(f"✅ Scraped {len(products)} products → products.csv")