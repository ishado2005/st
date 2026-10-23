import test from 'node:test';import assert from 'node:assert/strict';import {progress,risk,validUsername,safeURL} from '../assets/domain.js';
test('progress uses actual completed task count',()=>{assert.equal(progress([]),0);assert.equal(progress([{status:'done'},{status:'doing'},{status:'todo'}]),33);assert.equal(progress([{status:'done'}]),100)});
test('overdue incomplete project warns but complete stays healthy',()=>{const p={deadline:'2025-01-01'},now=new Date('2025-01-04');assert.equal(risk(p,[{status:'todo'}],now).level,'red');assert.equal(risk(p,[{status:'done'}],now).level,'green')});
test('near deadline flags low completion',()=>assert.equal(risk({deadline:'2025-01-05'},[{status:'todo'}],new Date('2025-01-04')).level,'gold'));
test('username validation',()=>{assert.ok(validUsername('dr_ahmed'));for(const s of ['aa','3abc','user name','<script>'])assert.equal(validUsername(s),false)});
test('blocks executable URLs',()=>{assert.equal(safeURL('javascript:alert(1)'), '');assert.equal(safeURL('data:text/html,abc'),'');assert.equal(safeURL('https://example.com'),'https://example.com/')});
