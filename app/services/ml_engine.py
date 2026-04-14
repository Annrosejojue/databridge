from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class MLEngine:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english')

    def analyze_data(self, text: str):
        """Analyzes text to determine data maturity and recommendations."""
        text = text.lower()
        score = 50
        
        # Simple Logic for Maturity
        recs = ["Initial Data Audit"]
        if "excel" in text: score -= 10
        if "automation" in text: score += 20
        
        if "customer" in text or "churn" in text:
            recs.append("Customer Retention Analysis")
        if "inventory" in text or "sales" in text:
            recs.append("Demand Forecasting")

        return {
            "maturity_score": min(score, 100),
            "recommendations": recs
        }

    def get_matches(self, business_need: str, experts: list):
        """Matches a business need against expert skills using Cosine Similarity."""
        if not experts: return []
        
        texts = [business_need] + [e['skills'] for e in experts]
        matrix = self.vectorizer.fit_transform(texts)
        scores = cosine_similarity(matrix[0:1], matrix[1:]).flatten()
        
        for i, expert in enumerate(experts):
            expert['match_score'] = round(float(scores[i]) * 100, 1)
            
        return sorted(experts, key=lambda x: x['match_score'], reverse=True)

ml_engine = MLEngine()